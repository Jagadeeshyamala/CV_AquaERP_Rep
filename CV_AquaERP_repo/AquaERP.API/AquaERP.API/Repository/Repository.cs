using AquaERP.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AquaERP.API.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly AquaERPContext _aquaERPContext = null;
        private readonly DbSet<TEntity> dbSet = null;


        public Repository(AquaERPContext aquaERPContext)
        {
            this._aquaERPContext = aquaERPContext;
            dbSet = _aquaERPContext.Set<TEntity>();
        }
        public void Delete(int id)
        {
            TEntity entity = dbSet.Find(id);
            dbSet.Remove(entity);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return dbSet.ToList();
        }

        public TEntity GetT(int id)
        {
            return dbSet.Find(id);
        }
        public TEntity GetTWithGuid(Guid id)
        {
            return dbSet.Find(id);
        }

        public void Insert(TEntity entity)
        {
           dbSet.Add(entity);
        }

        public void Update(TEntity entity)
        {
           dbSet.Attach(entity);
            _aquaERPContext.Entry(entity).State = EntityState.Modified;
        }
        public void Save()
        {
            _aquaERPContext.SaveChanges();
        }
    }
}
