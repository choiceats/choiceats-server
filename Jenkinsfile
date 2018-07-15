#!groovy

node {
  def appContainerName="choiceats-app"

  stage("inspect_environment_variables") {
    sh "echo Jenkinsfile reading environment"
    sh "echo -------------------------------"
    sh "echo ${env.CHOICEATS_DB_HOST}"
    sh "echo ${env.CHOICEATS_DB_NAME}"
    sh "echo ${env.CHOICEATS_DB_PORT}"
    sh "echo ${env.CHOICEATS_DB_USER}"
    sh "echo ${env.CHOICEATS_DB_PASS}"
    sh "echo ${env.CHOICEATS_NETW}"
  }

  stage("run_database") {
    sh "echo running database not yet implemented"
  }

  // stage("create_docker_network") {
  //   sh "[ ! \"$(docker network ls --filter name=${env.CHOICEATS_NETW} | grep ${env.CHOICEATS_NETW})\" ] && docker network create ${env.CHOICEATS_NETW}"
  // }

  stage("remove_old_containers") {
    sh "docker stop ${appContainerName} || true"
    sh "docker rm ${appContainerName} || true"
  }

  stage("build_and_run_app") {

    checkout scm

    def appDockerArgs = """\
      --build-arg DB_HOST=${env.CHOICEATS_DB_HOST}"
      --build-arg DB_NAME=${env.CHOICEATS_DB_NAME}"
      --build-arg DB_PORT=${env.CHOICEATS_DB_PORT}"
      --build-arg DB_USER=${env.CHOICEATS_DB_USER}"
      --build-arg DB_PASS=${env.CHOICEATS_DB_PASS}"
      -f Dockerfile ./""".stripIndent()

    def now = new Date()
    def timestamp = now.format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC'))
    def appImageTag="choiceats/app:${timestamp}"

    def customImage = docker.build("${appImageTag}", "${appDockerArgs}")

    sh "docker run --rm --net ${env.CHOICEATS_NETW} -p 80:4000 -dit --name ${appContainerName} ${appImageTag}"
  }
}
