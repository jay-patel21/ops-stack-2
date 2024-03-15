pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                dockerfile {
                    filename 'Dockerfile-P'
                    image 'node:18-alpine'
                    label 'docker-agent'
                }
            }
            steps {
                sh 'node --version'
                sh 'ls'
                sh 'su node'
                sh 'rm -r node_modules'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}
