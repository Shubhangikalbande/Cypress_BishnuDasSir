describe("api testing",()=>{

    it("get method",()=>{

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"


        }).then((response)=>{

            expect(response.status).equal(200);
            expect(response.body).to.have.property('page',2)
            expect(response.body).to.have.property('per_page',6)
            expect(response.body).to.have.property("total_pages",2)
            expect(response.body.data).to.be.an("array").and.have.length(6)
            expect(response.body.data[3]).to.have.property("last_name","Fields")
            expect(response.body.data[0]).to.have.property( "id", 7)
            expect(response.body).to.have.property('support')
            expect(response.body.support).to.have.property( "url","https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral")
        })
    })
    it("get method,404 response",()=>{

        cy.request({method:"GET",
            url:"https://reqres.in/api/users/23",
            failOnStatusCode: false

        }).then((response)=>{

            expect(response.status).to.equal(404)
            expect(response.body).to.be.empty
        })
    })
    it("post method",()=>{

        let user=
            {
                "name": "morpheus",
                "job": "leader"
            };
        

        cy.request({method:"POST",
            url:"https://reqres.in/api/users",
            headers:{
                "Content-Type":"application/json"
                
                }

        }).then((response)=>{

            expect(response.status).to.equal(201)
            // expect(response.body).to.have.property("name", "morpheus")
            // expect(response.body).to.have.property("job","leader")
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("createdAt")
            expect(response.body.id).to.be.a("string")
            expect(response.body.createdAt).to.be.a("string")
            cy.log(response.body)//this generates  id and createdAt  hence u cant assert name n job
           
        })
    })
    it.only("post request",()=>{
         const paylod={
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            headers:{
                "Content-Type":"application/json",
            },
            
        }).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body).to.have.property("id")
        })
    })
    it("put request",()=>{

        const payload={
            "name": "morpheus",
            "job": "zion resident"
        }

        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>{
            cy.log(response.body)
            expect(response.status).to.equal(200)
            expect(response.body).have.property("updatedAt")
           
        })
    })
    it("delete",()=>{

        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
            headers:{
                
            }

        }).then((response)=>{

            cy.log(response.body)
            expect(response.status).to.equal(204)
            expect(response.body).to.be.empty
        })
    })

    it("post request fr token generation",()=>{

        let payload={
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/login",
            headers:{
                "Content-Type":"application/json"
                
            },
            failOnStatusCode: false,
            body: payload


    }).then((response)=>{

        cy.log(response.body)
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property("token")
    })

})
})