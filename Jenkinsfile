pipeline {
    agent {
        label 'docker-agent'
    }
    
    environment {
        ECR_REPO_URL = '730335598283.dkr.ecr.us-east-1.amazonaws.com/node-service'
        AWS_REGION = 'us-east-1'
    }
    
    stages {
        stage('Build and Test') {
            steps {
                script {
                    sh 'whoami'
                    def build = docker.build("node-service")
                    build.inside('-u root') {
                        sh 'rm -rf node_modules'
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        
        stage('Push to ECR') {
            steps {
                script {
                    docker.withRegistry('https://730335598283.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:aws-ECR') {
                        def build = docker.build("node-service") // You need to redefine the build here
                        build.push()
                    }
                }
            }
        }
        
        stage('Deploy image on EC2') {
            steps {
                script {
                    sshagent(credentials: ['node-server']) {
                        sh 'ssh -v -o StrictHostKeyChecking=no -l ubuntu 3.91.228.249 uname -a'
                        sh "echo logged into the node-server"
                        sh '''
                            if [ $(docker ps -f name=blue -q) ]; then
                                ENV="green"
                                OLD="blue"
                            else
                                ENV="blue"
                                OLD="green"
                            fi

                            echo "Starting $ENV container"
                            docker-compose --project-name=$ENV up -d

                            echo "Waiting..."
                            sleep 5s

                            echo "Stopping $OLD container"
                            docker-compose --project-name=$OLD stop
                        '''
                    }
                }
            }
        }
    }
}
