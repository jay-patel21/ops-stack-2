pipeline {
    agent { label 'node-agent'}
    stages {
        stage('Test') {
            agent {
                docker { image 'node:20.11.1' }
            }
            steps {
                sh 'whoami'
                sh 'docker ps'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
