pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred-yeshwant')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t yeshwantm/ezcode:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push yeshwantm/ezcode:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}