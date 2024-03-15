pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                dockerfile {
                    filename 'Dockerfile-P'
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
