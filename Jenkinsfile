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
                sh 'chown -R node:node /.npm'
                sh 'ls'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}
