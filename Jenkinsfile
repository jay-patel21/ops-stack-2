pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19'
                    label 'docker-agent'
                }
            }
            steps {
                sh 'node --version'
                sh 'sudo npm install'
                sh 'sudo npm run test'
            }
        }
    }
}
