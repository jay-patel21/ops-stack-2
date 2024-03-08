pipeline {
    agent { label 'node-agent'}
    stages {
        stage('Test') {
            agent {
                dockerfile true
                label 'node-agent'
            }
            steps {
                sh 'ip add'
                sh 'whoami'
                sh 'ls'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
