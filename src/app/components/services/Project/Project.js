'use strict';

angular.module('portfolio').factory('Project', function () {

    var projectList = [
      {
        "_id": "554fc99ad7992bbcab4cd672",
        "name": "Emergent",
        "description": "Irure mollit magna excepteur ad nulla officia mollit. Deserunt labore veniam consequat eiusmod.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a40d78f077d7d6f4c",
        "name": "Aquamate",
        "description": "Aliqua sit commodo veniam enim velit laborum. Ullamco quis aliquip quis labore dolore deserunt cupidatat enim magna.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a3560ec036d07a64b",
        "name": "Cinesanct",
        "description": "Deserunt incididunt sint elit elit consequat magna pariatur officia exercitation voluptate ea ea sunt pariatur. Sunt qui excepteur laboris cupidatat reprehenderit anim.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a8809bf057c240d42",
        "name": "Andryx",
        "description": "Tempor aliquip nisi cillum enim. Sunt cupidatat ea dolor ea ad irure exercitation nostrud.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a06ff462d03aeb0f0",
        "name": "Geeky",
        "description": "Sit et aliquip dolor voluptate ullamco velit cupidatat Lorem consectetur sit aliquip occaecat. Tempor consectetur magna enim et esse adipisicing.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a1c63b5bb51d5afe4",
        "name": "Unq",
        "description": "Commodo ipsum minim pariatur mollit aute nulla. Enim amet reprehenderit culpa reprehenderit enim deserunt id.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a50469cbea4e3048f",
        "name": "Zensor",
        "description": "Qui non excepteur nulla excepteur. Deserunt dolore eu irure ad officia sit voluptate eiusmod.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a5b0ab697e8721888",
        "name": "Quinex",
        "description": "Id aliquip ad velit ullamco est duis ipsum id elit. Ea consequat labore est consequat.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2014,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99ad879f54bd16a62ab",
        "name": "Gazak",
        "description": "Eiusmod ut dolor ea reprehenderit culpa commodo eiusmod mollit. Consectetur do eiusmod laboris nisi adipisicing eiusmod enim.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2014,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99acc199bc14aaf964a",
        "name": "Krog",
        "description": "Laborum incididunt dolore dolore ad qui excepteur id id dolor culpa veniam ut. Eiusmod id proident pariatur ullamco duis in sint culpa pariatur aute ea magna est duis.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2014,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a3a2cc4274ba307af",
        "name": "Fleetmix",
        "description": "Deserunt velit ut magna Lorem excepteur minim laboris ea ipsum esse ipsum. Pariatur anim velit culpa reprehenderit non.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a3eea63227d94a382",
        "name": "Medesign",
        "description": "Est laborum aliquip tempor exercitation et aliqua mollit. Mollit laboris et voluptate id nulla nisi.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99afbc918dd7b276d39",
        "name": "Otherway",
        "description": "Consectetur dolor qui et sunt duis irure et excepteur. Ex aliqua dolor pariatur sit qui deserunt deserunt ipsum eu voluptate id tempor enim sit.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a96da999f45d11e33",
        "name": "Permadyne",
        "description": "Laboris velit consequat fugiat elit laboris veniam anim ullamco cillum aliqua deserunt excepteur occaecat. Mollit proident minim exercitation cillum incididunt proident.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a8ecb49752a3194af",
        "name": "Boilicon",
        "description": "Sit aute commodo cupidatat laborum labore reprehenderit duis in ullamco. Proident commodo adipisicing adipisicing velit fugiat mollit irure laboris sint ipsum veniam exercitation laborum.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a7b83245db68b1048",
        "name": "Navir",
        "description": "Anim ea exercitation in do qui aliquip minim occaecat. Id dolor cillum exercitation duis anim nostrud cupidatat in qui velit fugiat commodo ut sunt.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99ad6c460741f2ba448",
        "name": "Portico",
        "description": "Elit ipsum deserunt culpa non anim sit Lorem incididunt exercitation nulla consectetur. Enim minim laboris ut qui laborum magna.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a32f37a68a41c8c61",
        "name": "Callflex",
        "description": "Eiusmod excepteur nostrud ad dolor ad est eu sint magna esse eu incididunt. Nisi ad ullamco aute laborum magna sit voluptate culpa commodo pariatur.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a3e9bd3bfb460ab47",
        "name": "Cyclonica",
        "description": "Minim ea in quis occaecat pariatur magna pariatur sunt. Reprehenderit culpa adipisicing ad minim reprehenderit aliqua quis magna quis.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99ac4eefa388b884142",
        "name": "Netur",
        "description": "Consectetur sit esse irure velit officia. Culpa ad mollit anim tempor.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a0f805da7e4099828",
        "name": "Turnabout",
        "description": "Dolor commodo consectetur voluptate non esse fugiat exercitation culpa in cupidatat ipsum. Aute et ipsum proident ea elit pariatur eiusmod est duis nostrud consequat nulla commodo consequat.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99ab50278432dcaf74b",
        "name": "Deviltoe",
        "description": "Tempor cillum voluptate velit amet quis exercitation aliqua deserunt ex anim. Fugiat aliqua et ullamco incididunt aute aliqua adipisicing consequat excepteur aliqua sit elit.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a68110c20cc3a3586",
        "name": "Amtap",
        "description": "Id qui tempor nulla ut laboris esse sint consectetur in aute pariatur sit. Deserunt labore sunt occaecat ex nostrud nostrud minim sint elit et incididunt.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2014,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99ade5d5eaa602ce20f",
        "name": "Comvene",
        "description": "Et eiusmod aute sunt elit. Aute eu sit consectetur tempor occaecat.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a8df37345a12ce8cc",
        "name": "Ovium",
        "description": "Adipisicing velit aliquip est et in ad officia cupidatat et. Proident elit officia id quis deserunt elit qui id.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a0375b156a1204365",
        "name": "Bedlam",
        "description": "Eu reprehenderit ullamco quis amet exercitation commodo nostrud. Elit ipsum eu nisi est sit consectetur elit dolor culpa ex pariatur fugiat esse.",
        "technologies": "JavaScript HTML5 CSS3",
        "year": 2012,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99af4ba21626baea636",
        "name": "Songlines",
        "description": "Fugiat eiusmod ipsum eiusmod exercitation. Voluptate dolor minim et pariatur irure cupidatat voluptate ipsum veniam ullamco.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2015,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a336a76b6abf3f1a6",
        "name": "Zappix",
        "description": "Cupidatat nisi aute occaecat adipisicing consectetur cupidatat duis deserunt adipisicing ut culpa. Sint esse esse velit cillum anim deserunt pariatur qui pariatur exercitation.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a100ada391c855ab8",
        "name": "Fiberox",
        "description": "Incididunt nostrud quis est minim eu cillum ad aliqua dolore deserunt. Sunt id enim cupidatat irure commodo minim anim.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      },
      {
        "_id": "554fc99a21d5d43c9b2bfae6",
        "name": "Extro",
        "description": "Dolor deserunt nostrud voluptate quis do consectetur. Officia ex elit laborum eiusmod consequat enim cupidatat.",
        "technologies": "AngularJS HTML5 CSS3",
        "year": 2013,
        "image": "http://placehold.it/200x150",
        "url": "http://www.google.com/"
      }
    ];

    var getProjects = function () {
      return projectList;
    };

    return {
      getProjects: getProjects
    };
});




//JSON generation
//[
//  '{{repeat(30, 30)}}',
//  {
//    _id: '{{objectId()}}',
//    name: '{{company()}}',
//    description: '{{lorem(2, "sentences")}}',
//    technologies: '{{random("JavaScript HTML5 CSS3", "AngularJS HTML5 CSS3")}}',
//    year: '{{random(2012,2013,2014,2015)}}',
//    image: 'http://placehold.it/200x150',
//    url: '{{"http://www.google.com/"}}'
//  }
//]
