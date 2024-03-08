pipeline {
    agent any
    stages {
            steps {
                sh 'whoami'
                sh 'docker ps'
                sh 'node --version'
                sh 'svn --version'
            }
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
