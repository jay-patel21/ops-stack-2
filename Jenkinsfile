pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    label 'docker-agent'
                    args  '-u root'
                }
            }
            steps {
                sh 'node --version'
                sh 'ls'
                // sh 'npm install'
                // sh 'npm run test'
            }
        }
    }
}
