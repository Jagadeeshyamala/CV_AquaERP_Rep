using System;
using System.Collections.Generic;
using System.Linq;

namespace AquaERP.API.Repository
{
    public interface IRepository<T>
    {
       IEnumerable<T> GetAll();
        T GetT(int id);
        void Delete(int id);
        void Update(T entity);

        void Insert(T entity);
        void Save();

    }
}
