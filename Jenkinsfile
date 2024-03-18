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
                       sh '''
                        ssh -v -o StrictHostKeyChecking=no -l ubuntu 54.234.53.183 \
        '               uname -a && \
                        echo logged into the node-server && \
                        ls && \
                        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 730335598283.dkr.ecr.us-east-1.amazonaws.com && \
                        docker-compose -f node-service-docker-compose.yml up -d'
                        '''
                    }
                }
            }
        }
    }
}
