using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using MyBetsAPI.Models;

namespace MyBetsAPI.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods:"*")]
  public class AuctionController : ApiController
  {
    private MyBetsDBEntities db = new MyBetsDBEntities();

    // GET: api/Auction
    public IQueryable<Auction> GetAuctions()
    {
      return db.Auctions;
    }

    // GET: api/Auction/5
    [ResponseType(typeof(Auction))]
    public IHttpActionResult GetAuctions(int id)
    {
      Auction auctions = db.Auctions.Find(id);
      if (auctions == null)
      {
        return NotFound();
      }

      return Ok(auctions);
    }

    // PUT: api/Auction/5
    [ResponseType(typeof(void))]
    public IHttpActionResult PutAuctions(int id, Auction auctions)
    {

      if (id != auctions.Id)
      {
        return BadRequest();
      }

      db.Entry(auctions).State = EntityState.Modified;

      try
      {
        db.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AuctionExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return StatusCode(HttpStatusCode.NoContent);
    }

    // POST: api/Auction
    [ResponseType(typeof(Auction))]
    public IHttpActionResult PostAuction(Auction auction)
    {

      db.Auctions.Add(auction);

      try
      {
        db.SaveChanges();
      }
      catch(DbUpdateConcurrencyException)
      {
        throw;
      }

      return CreatedAtRoute("DefaultApi", new { id = auction.Id }, auction);

    }

    // DELETE: api/Auction/5
    [ResponseType(typeof(Auction))]
    public IHttpActionResult DeleteAuction(int id)
    {
      Auction auction = db.Auctions.Find(id);
      if (auction == null)
      {
        return NotFound();
      }

      db.Auctions.Remove(auction);
      db.SaveChanges();

      return Ok(auction);
    }

    protected override void Dispose(bool disposing)
    {
      if (disposing)
      {
        db.Dispose();
      }
      base.Dispose(disposing);
    }

    private bool AuctionExists(int id)
    {
      return db.Auctions.Count(e => e.Id == id) > 0;
    }
  }
}
