const chai = require('chai')
const expect = chai.expect
const request = require('supertest');

const server = require("../routing") // bu sayede "npm test" çağrılınca api de ayağa kaldırılacak.

const token = require("../routers/tokenrouter")

const actorsPost = require("../routers/actorsRouter")
const actorsGet = require("../routers/actorsRouter")
const actorsPut = require("../routers/actorsRouter")
const actorsDelete = require("../routers/actorsRouter");

const { drawersPost } = require('../controllers/drawersControllers/drawersPostController');
const { drawersGet, drawersGetwithId } = require('../controllers/drawersControllers/drawersGetController');
const { drawersDelete } = require('../controllers/drawersControllers/drawersDeleteController');
const { drawersPut } = require('../controllers/drawersControllers/drawersPutController');
const { writersPost } = require('../controllers/writersControllers/writersPostController');
const { writersPut } = require('../controllers/writersControllers/writersPutController');
const { writersDelete } = require('../controllers/writersControllers/writersDeleteController');
const { writersGet, writersGetwithId } = require('../controllers/writersControllers/writersGetControllers');
 



// API tests
describe("TOKEN CREATING", function () {
	it("Creates a token", function () {
	
		//console.log("token:", token);
		request(token)
			.post('token/getToken')
			.expect(201);
		
	})
})


describe("'POST' COMMAND", function () {
	/*
	before(done => {
		console.log("Herşeyden önce ben çalışırım");
		done();

		chai.request(server)
			.post("getToken")
			.send({userName: "furkanbeyaz", password: 123})
			.end((error,response) => {
				if(!error) {
					token = response.body.token
					statuscode = response.body.statuscode
					console.log(`Token : ${token}\nStatus : ${statuscode}`);				
				}else{
					console.log("HATA!!!!!!!!!!");
				}
			})
   });
*/
	it("Posts specified registry for 'Actors'", function () {
		request(actorsPost)
			.post('api/actors/post')
			.send({
				isim: "POSTName1",
				filmler: [
					"POSTMovie1",
					"POSTMovie2",
					"POSTMovie3"
				]
			})
			.expect(201);
			createdToken = token		
	});
	
	it("Posts specified registry for 'Drawers'", function () {
		request(drawersPost)
			.post('api/drawers/post')
			.expect(201);
	});

	it("Posts specified registry for 'Writers'", function () {
		request(writersPost)
			.post('api/writers/post')
			.expect(201);
	});
	
	
})

describe("'GET' COMMAND", function () {
	it("Lists all registries for 'Actors'", function () {
		request(actorsGet)
			.get('http://localhost:4000/api/actors/get')
			.expect(200);
	});
	
	it("Lists all registries for 'Drawers'", function () {
		request(drawersGet)
			.get('api/drawers/get')
			.expect(200);
	});

	it("Lists all registries for 'Writers'", function () {
		request(writersGet)
			.get('api/writers/get')
			.expect(200);
	});


	before(done => {
		console.log("Herşeyden önce ben çalışırım");
		done();

		chai.request(server)
			.post("getToken")
			.send({userName: "furkanbeyaz", password: 123})
			.end((error,response) => {
				if(!error) {
					token = response.body.token
					statuscode = response.body.statuscode
					console.log(`Token : ${token}\nStatus : ${statuscode}`);				
				}else{
					console.log("HATA!!!!!!!!!!");
				}
			})
/*
		it("Employee Get", done => {
			console.log(token);
			console.log(statuscode);
			chai.request(server)
				 .get("/employee/getEmployee")
				 .set("x-access-token", token)
				 .end((error, response) => {
					  response.should.have.status(200);
					  response.body.should.be.a("array");
   
					  done();
				 });
	   });*/
   });
});

describe("'GET with ID' COMMAND", function () {
	it("Lists specified registry for 'Actors'", function () {
		request(actorsGet)
			.get('api/actors/get/:id')
			.expect(200);
	});
	
	it("Lists specified registry for 'Drawers'", function () {
		request(drawersGetwithId)
			.get('api/drawers/get/:id')
			.expect(200);
	});

	it("Lists specified registry for 'Writers'", function () {
		request(writersGetwithId)
			.get('api/writers/get/:id')
			.expect(200);
	});
	/*
	before(done => {
		console.log("Herşeyden önce ben çalışırım");
		done();
   });*/
});


describe("'PUT with ID' COMMAND", function () {
	it('Updates a specified registry for "Actors"', function () {
		request(actorsPut)
			.put("api/actors/put/:1")

			.send({
				isim: "PUTName1",
				filmler: [
					"PUTMovie1",
					"PUTMovie2",
					"PUTMovie3"
				]
			})
			.expect(200);
	})

	it('Updates a specified registry for "Drawers"', function () {
		request(drawersPut)
			.put("api/drawers/put/:id")
			.expect(200);
	});
	it('Updates a specified registry for "Writers"', function () {
		request(writersPut)
			.put("api/writers/put/:id")
			.expect(200);
	});
/*
	before(done => {
		console.log("Herşeyden önce ben çalışırım");
		done();
   });*/
})

	

describe("'DELETE with ID' COMMAND", function () {
	it('Deletes a specified registry for "Actors"', function () {
		request(actorsDelete)
			.delete("api/actors/delete/:id")
			.expect(200);
	});
	
	it('Deletes a specified registry for "Drawers"', function () {
		request(drawersDelete)
			.delete("api/drawers/delete/:id")
			.expect(200);
	});

	it('Deletes a specified registry for "Writers"', function () {
		request(writersDelete)
			.delete("api/writers/delete/:id")
			.expect(200);
	});
/*
	before(done => {
		console.log("Herşeyden önce ben çalışırım");
		done();
   });
   */
	
})




/*
const jwt = require("jsonwebtoken")
module.exports = (request, response, next) => {
    const token = request.headers["x-access-token"] || request.body.token || request.query.token;
    describe("TOKEN CREATING", function () {
		it("Creates a token", function () {
		
			jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {

			console.log("token:", token);
			
			request(token)
				.post('token/getToken')
				.expect(201);
			
			
	
	
		})
	})
	
	
	
	
	if (!token)
        response.send("Token does not exist!");
    else {
        jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {
            if (error)
                response.send("Unvalid token!");
            else {
                request.decode = decoded;
                console.log("Everything is okay.");
                //console.log("request.decode:",request.decode);
                //console.log("decoded:",decoded);
                next();
            }
        });
    }
});
}
*/