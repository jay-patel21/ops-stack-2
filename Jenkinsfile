pipeline {
    agent {
        label 'docker-agent'
    }
    environment {
        ECR_REPO_URL = '730335598283.dkr.ecr.us-east-1.amazonaws.com/node-service'
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
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
                    // Authenticate with ECR
                    docker.withRegistry('', 'awsecr') {
                        // Tag the image for ECR
                        docker.image("my-image").tag("${ECR_REPO_URL}:latest")

                        // Push the image to ECR
                        docker.image("${ECR_REPO_URL}:latest").push()
                    }
                }
            }
        }
    }
}
