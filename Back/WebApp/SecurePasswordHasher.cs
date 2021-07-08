using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace WebApp
{
    public static class SecurePasswordHasher
    {
        public static string GetStringSha256Hash(string text)
        {
            HashAlgorithm sha1 = new SHA256Managed();
            var inputBytes = Encoding.ASCII.GetBytes(text);
            var hash = sha1.ComputeHash(inputBytes);
            var sb = new StringBuilder();
            for (var i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
    }  
}
