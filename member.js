function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member/skills.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member: '='
    }
  };
}