$(function() {
	
	/*========== Preloader ==========*/
	
	var delay = 1500;
	$('#animation').delay(delay).fadeOut();
	$('#preloader').delay(delay).fadeOut('slow'); 
	
	
	
	/*========== Initialisations Bootstrap ==========*/
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$('[data-toggle="popover"]').popover();
	
	$('main').scrollspy({ target: '#nav' });
	
	/*========== Smooth scroll ==========*/
	
	$('.smooth').on('click', function() { 
		var cible = $(this).attr('href'); 
		var speed = 750; 
		$('html, body').animate( { scrollTop: $(cible).offset().top }, speed );
		return false;
	});

});



/*========== Initialisation Wow.js ==========*/

new WOW().init();



/*========== Angular.js ==========*/

var app = angular.module("myApp", []);
app.controller("PortfolioCtrl", function($scope) {
	$scope.logo = '//designweb.alwaysdata.net/wp-content/uploads/2018/01/avatar_kma-1.png';
	$scope.author = 'Kewin Marchand';
	$scope.authorName = 'Marchand';
	$scope.authorSurname = 'Kewin';
	$scope.job = 'Designer web';
	$scope.phone = '06 68 59 28 30';
	$scope.email = 'kewin.marchand@gmail.com';
	$scope.adress = '105 ch. des plaines, Vauvenargues, France';
	$scope.aboutContent = [
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed quia non numquam eius modi tempora.'
		},
		{
			text:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
		}
	]
	
});

app.component('loader', {
	template:
		'<figure class="svg-container">' +
			'<svg class="svg" height="180" width="180" aria-labelledby="title">' +
				'<title lang="fr">loader</title>' +
				'<circle class="circle peel" cx="90" cy="90" r="80"/>' +
			'</svg>' +
		'</figure>' +
		'<figure class="svg-container spin rotate">' +
			'<svg class="svg" height="180" width="180">' +
				'<circle class="circle peel" cx="90" cy="90" r="80"/>' +
			'</svg>' +
		'</figure>' 
	});

app.component('separateur', {
	template:
		'<svg id="separateur" x="0px" y="0px" width="60.5px" height="12.6px" viewBox="0 0 60.5 12.6" xml:space="preserve" aria-labelledby="title">' +
			'<title lang="fr">séparateur tirlili</title>' +
			'<polyline class="tirlili" points="59.8,0.7 49.4,11.1 39.8,1.6 30.3,11.1 20.7,1.6 11.1,11.1 0.7,0.7 "/>' +
		'</svg>',
	});

app.component('menuList', {
	template:
		'<ul class="navbar-nav">' +
			'<li class="nav-item" ng-repeat="navbarLink in $ctrl.navbarLinks">' +
				'<a class="nav-link smooth" href="#{{navbarLink.href}}" role="tab">{{navbarLink.label}}</a>' +
			'</li><!-- /.nav-item -->' +
		'</ul><!-- /.navbar-nav -->',
	controller: function menuListController() {
		this.navbarLinks = [
			{
				href:'home',
				label:'Accueil'
			},
			{
				href:'about',
				label:'A propos'
			},
			{
				href:'works',
				label:'Travaux'
			},
			{
				href:'contact',
				label:'Contact'
			}
		]
	}	
});

app.component('skillList', {
	template:
		'<ul class="skills-list row py-5 px-0">' +
			'<li class="skills-item col-md-6 col-xl-3 text-center" ng-repeat="skill in $ctrl.skills">' +
				'<figure class="skill pb-3">' +
					'<i class="skill-icon fas {{skill.icon}}" title="{{skill.title}}" alt="{{skill.iconLabel}}">' +
					'<span class="sr-only">{{skill.iconLabel}}</span>' +
					'</i>' +
					'<figcaption class="skill-caption mt-3">'  +
						'<h3 class="skill-title">{{skill.title}}</h3>' +
						'<p class="skill-text">{{skill.text}}</p>' +
					'</figcaption>' +
				'</figure>' +
			'</li><!-- /.skill --> ' +
		'</ul><!-- /.skills-list -->',
	controller: function skillListController() {
			this.skills = [
				{
				icon:'fa-pencil-alt', 
				iconLabel:'Icone de crayon', 
				title:'Conception graphique', 
				text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
				},
				{
				icon:'fa-cogs', 
				iconLabel:'Icone d\'engrenages', 
				title:'Développement web', 
				text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
				},
				{
				icon:'fa-chart-line', 
				iconLabel:'Icone de tableau', 
				title:'Gestion de projet', 
				text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
				},
				{
				icon:'fa-search', 
				iconLabel:'Icone  SEO', 
				title:'Référencement', 
				text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
				}
			]
		}	
});

app.component('progressList', {
	template:
		'<ul class="progress-bars-list row wow fadeInLeft">' +
			'<li class="progress_bar col-12" ng-repeat="progressBar in $ctrl.progressBars">' +
				'<h2 class="progress-bar-title">{{progressBar.title}} - {{progressBar.value}}%</h2>' +
				'<progress class="progress-bar-item" role="progressbar" value="{{progressBar.value}}" max="100">' +
					'<span class="sr-only">{{progressBar.value}}% Complete</span>'  +
				'</progress>' +
			'</li><!-- /.single_progress_bar -->' +
		'</ul><!-- /.progress-bars-list -->',
	controller: function progressListController() {
			this.progressBars = [
				{
					title:'design',
					value: 80,
				},
				{
					title:'développement',
					value: 70,
				},
				{
					title:'gestion de projets',
					value: 75,
				},
				{
					title:'seo',
					value: 85,
				}
			]
		}	
});

app.component('factList', {
	template:
		'<ul class="facts-list row">' +
			'<li class="facts-item col-4 text-center" ng-repeat="fact in $ctrl.facts">' +
				'<figure class="fact d-flex flex-column justify-content-center">' +
					'<i class="fact-icon fas {{fact.icon}}" title="{{fact.title}}" alt="{{fact.iconLabel}}">' +
						'<span class="sr-only">{{fact.iconLabel}}</span>	' +
					'</i>' +
					'<figcaption class="fact-caption mt-3">'  +
						'<h3 class="fact-title">{{fact.number}}</h3>' +
						'<p class="fact-text">{{fact.text}}</p>' +
					'</figcaption>' +
				'</figure>' +
			'</li><!-- /.facts-item --> ' +
		'</ul><!-- /.facts-list -->',
		controller: function skillListController() {
			this.facts = [
				{
				icon:'fa-tasks', 
				iconLabel:'Icone de tâches', 
				number:'30', 
				text:'Projets aboutis.'
				},
				{
				icon:'fa-clock', 
				iconLabel:'Icone d\'horloge', 
				number:'1700+', 
				text:'Heures travaillées.'
				},
				{
				icon:'fa-trophy', 
				iconLabel:'Icone de trophé', 
				number: '1', 
				text:'Récompense reçue.'
				},
			]
		}	
	});

app.component('langageList', {
	template:
		'<ul class="langages_carrousel">' +
			'<li class="langage_item" ng-repeat="langage in $ctrl.langages">' +
				'<img class="langage" src="{{langage.src}}" title="{{langage.title}}" alt="Logo de {{langage.title}}"/>' +
			'</li><!-- /.langage_item --> ' +
		'</ul><!-- /.langages_carrousel -->',
	controller: function langageListController() {
		this.langages = [
			{
			title: 'Node.js',
			src:'//nodejs.org/static/images/logos/nodejs-new-pantone-black.png', 
			},
			{
			title: 'Visual studio',
			src:'//i.pinimg.com/originals/3a/d4/86/3ad4869c1648d61506f871dc46ba3f45.png', 
			},
			{
			title: 'SASS',
			src:'//sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png', 
			},
			{
			title: 'Vue.js',
			src:'//blog.xebia.fr/wp-content/uploads/2016/11/vuejs-logo-5-300x300.png', 
			},
			{
			title: 'A-frame',
			src:'//cdn-images-1.medium.com/max/512/1*oORAGqcJB-2MBl0Dt65D4Q.png', 
			},
			{
			title: 'jQuery',
			src:'//src.iut-troyes.univ-reims.fr/~mmid114b09/jquery/images/logo_jquery.png', 
			},
			{
			title: 'Angular.js',
			src:'https://i1.wp.com/pbs.twimg.com/media/C2Sg2H8WgAAsW40.jpg?w=1170&ssl=1', 
			},
			{
			title: 'Suite Adobe',
			src:'//logok.org/wp-content/uploads/2014/09/Adobe-logo-880x660.png', 
			},
			{
			title: 'GitHub',
			src:'//assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png', 
			}
		]
	}	
});

app.component('workList', {
	template:
		'<ul class="works_list row">' +
			'<li class="work_item col-md-6 col-lg-4 px-0 pt-1 wow fadeIn"  data-wow-offset="300" ng-repeat="work in $ctrl.works">' +
				'<figure class="work">' +
					'<img class="work_image" src="{{work.img}}" alt="{{work.type}} - {{work.subtitle}}" title="{{work.title}}">' +
					'<figcaption class="image_overlay">'  +
						'<a href="{{work.url}}">Voir le projet</a>' +
						'<h4 class="work_title">{{work.title}}</h4>' +
						'<h5 class="work_subtitle">{{work.subtitle}}</h5>' +
					'</figcaption>' +
				'</figure>' +
			'</li><!-- /.work_item -->' +
		'</ul><!-- /.works_list -->',
	controller: function workListController() {
			this.works = [
				{
					url: '//www.eureka-interim.fr/',
					type:'site web',
					img: '//www.kewinmarchand.fr/img/portfolio/mockup-eureka.jpg',
					title: 'site web',
					subtitle: 'HTML, CSS, Wordpress'
				},
				{
					url: '//www.lvdenvironnement.fr/',
					type:'site web',
					img: '//www.kewinmarchand.fr/img/portfolio/mockup-lvd.jpg',
					title: 'site web',
					subtitle: 'HTML, CSS, Wordpress'
				},
				{
					url: '//srhcompetences.com/',
					type:'site web',
					img: '//www.kewinmarchand.fr/img/portfolio/mockup-srh.jpg',
					title: 'site web',
					subtitle: 'HTML, CSS, Wordpress'
				},
				{
					url: '//www.winov-conseil.fr/',
					type:'site web',
					img: '//www.kewinmarchand.fr/img/portfolio/mockup-winov.jpg',
					title: 'site web',
					subtitle: 'HTML, CSS, Wordpress'
				},
				/*
				{
					url: '//designweb.alwaysdata.net/',
					type:'site web',
					img: '//www.kewinmarchand.fr/img/portfolio/mockup-dwsalon.jpg',
					title: 'site web',
					subtitle: 'HTML, CSS, Wordpress'
				},
				*/
				{
					url: '//www.kewinmarchand.fr/img/portfolio/massif-aeroport.jpg',
					type:'Conception 3D',
					img: '//www.kewinmarchand.fr/img/portfolio/massif-aeroport.jpg',
					title: 'illustration',
					subtitle: 'Sketchup, photoshop'
				},
				{
					url: '//www.kewinmarchand.fr/img/portfolio/illustration-boule.jpg',
					type:'illustration',
					img: '//www.kewinmarchand.fr/img/portfolio/illustration-boule.jpg',
					title: 'illustration',
					subtitle: 'illustrator'
				},
			]
		}	
});

app.component('socialList', {
	template:
		'<ul class="social_list row text-center" >' +
			'<li class="social_item col-3" ng-repeat="footerLink in $ctrl.footerLinks">' +
				'<a class="social_link px-3" href="{{footerLink.href}}">' +
					'<i class="fab {{footerLink.icon}}" alt="{{footerLink.iconLabel}}" title="{{footerLink.text}}">' +
						'<span class="sr-only">{{footerLink.text}}</span>' +
					'</i>' +
				'</a>' +
			'</li><!-- /.social_item -->' +
		'</ul><!-- /.social_list -->',
	controller: function socialListController() {
		this.footerLinks = [
			{
			href:"#",
			icon:'fa-facebook', 
			iconLabel:'Icone de facebook',  
			text:'retrouvez moi sur facebook'
			},
			{
			href:"#",
			icon:'fa-twitter', 
			iconLabel:'Icone de twitter', 
			text:'retrouvez moi sur twitter'
			},
			{
			href:"#",
			icon:'fa-linkedin', 
			iconLabel:'Icone de linkedin', 
			text:'retrouvez moi sur linkedin'
			},
			{
			href:"#",
			icon:'fa-dribbble', 
			iconLabel:'Icone de dribbble', 
			text:'retrouvez moi sur dribbble'
			}
		]
		}	
});



/*========== Chart.js ==========*/

var logiciels = [
			"Photoshop", 
			"Illustrator", 
			"After Effects",
			"InDesign",
			"Xd"
		];
var logicielsData = [30, 30, 15, 10, 15];
var langages = [
	"HTML 5", 
	"CSS 3", 
	"SVG", 
	"Javascript", 
	"PHP"
];
var langagesData = [30, 30, 15, 10, 15];
var backgrounds = [
	'rgba(186,218,85,.5)',
	'rgba(218,118,85,.5)',
	'rgba(218,186,85,.5)',
	'rgba(85,218,184,.5)',
	'rgba(211,255,206,.5)'
];
var borders = [
	'rgb(186,218,85)',
	'rgb(218,118,85)',
	'rgb(218,186,85)',
	'rgb(85,218,184)',
	'rgb(211,255,206)'
];
var titleSize = 32;
var labelSize = 14;
var tipSize = 48;
var fontColor = "#3d3d3d";
var graphicInView = false;
var devInView = false;
function isScrolledIntoView(elem) {
	  var docViewTop = $(window).scrollTop();
	  var docViewBottom = docViewTop + $(window).height();
	  var elemTop = $(elem).offset().top + 300;
	  var elemBottom = elemTop + $(elem).height();
	  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
 }
$(window).scroll(function () {
	if (isScrolledIntoView('#graphicChart')) {
		if (graphicInView) {
			 return;
		}	
		graphicInView = true;
		var graphicChart = document.getElementById('graphicChart').getContext('2d');
		var chart = new Chart(graphicChart, {
			type: 'doughnut',
			data: {
				labels: logiciels,
				datasets: [{
					data: logicielsData,
					label:  "Graphisme",
					backgroundColor: backgrounds,
					borderColor: borders,      
				}]
			},
			options: {
				title: {
					display: true,
					text: 'Graphisme',
					fontColor: fontColor,
					fontSize: titleSize
				},
				legend: {
					display: false,
					 labels: {
						 fontColor: fontColor,
						 fontSize: labelSize
					 },
				},
				tooltips: {
					xPadding: 30,
					yPadding: 20,
					fontSize: tipSize,
				},
				scales: {
					yAxes: [{
						display: false,
					}]
				},
				rotation: 1
			}
		});
  		} 
	else {
		graphicInView = false;
	}
});
$(window).scroll(function () {
	if (isScrolledIntoView('#devChart')) {
		if (devInView) {
			 return;
		}	
		devInView = true;
		var devChart = document.getElementById('devChart').getContext('2d');
		var chart = new Chart(devChart, {
				type: 'doughnut',
				data: {
					labels: langages,
					datasets: [{
						data: langagesData,
						label:  "Développement",
						backgroundColor: backgrounds,
						borderColor: borders,      
					}]
				},
				options: {
					title: {
						display: true,
						text: 'Développement',
						fontColor: fontColor,
						fontSize: titleSize
					},
					legend: {
						display: false,
						labels: {
							fontColor: fontColor,
							fontSize: labelSize
						},
					},
					tooltips: {
						xPadding: 30,
						yPadding: 20,
						titleFontSize: tipSize,
					},
					scales: {
						yAxes: [{
							display: false,
						}]
					},
					rotation: 6
					}
			});
  		} 
	else {
		inView = false;
	}
});
