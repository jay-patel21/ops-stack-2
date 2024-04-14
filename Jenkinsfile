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
                    sshagent(credentials: ['node-service']) {
                       sh '''
                        ssh -v -o StrictHostKeyChecking=no -l ubuntu 44.203.40.2 \
                        'uname -a && \
                        whoami && \
                        echo logged into the node-server && \
                        ls && \
                        ./blue-green-deploy.sh'
                        '''
                    }
                }
            }
        }
    }
}
