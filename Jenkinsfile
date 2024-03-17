pipeline {
    agent {
        label 'docker-agent'
    }
    environment {
        ECR_REPO_URL = '730335598283.dkr.ecr.us-east-1.amazonaws.com/node-service'
        AWS_ECR_CRED = credentials('awsecr') 
        AWS_REGION = 'us-east-1'
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Define build as a global variable
                    def build = docker.build("my-image")

                    // Run tests inside the Docker image
                    build.inside('-u root') {
                        sh 'pwd'
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
                    def build = docker.build("my-image") // You need to redefine the build here

                    // Authenticate with ECR
                    docker.withRegistry('https://730335598283.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:awsecr') {
                        build.push()
                    }
                }
            }
        }
    }
}
