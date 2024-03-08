pipeline {
    agent any
    stages {
        stage('Test') {
            agent {
                sh 'ls .ssh' 
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
