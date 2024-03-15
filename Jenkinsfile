pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    label 'docker-agent'
                }
            }
            steps {
                sh 'node --version'
                sh 'ls'
                sh 'rm -r node_modules'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}
