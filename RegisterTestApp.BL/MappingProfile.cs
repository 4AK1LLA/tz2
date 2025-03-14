﻿using AutoMapper;

using RegisterTestApp.Service.Db;
using RegisterTestApp.Service.Dto;

namespace RegisterTestApp.Service
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegistrationModel, RegistrationRequest>()
                .ForMember(m => m.RegistrationPhones, 
                    opt => opt.MapFrom(r => r.PhoneNumbers.Select(x => new RegistrationPhone { PhoneNumber = x })))
                .ForMember(m => m.DateOfBirth, 
                    opt => opt.MapFrom(r => DateOnly.Parse(r.DateOfBirth)));

            CreateMap<RegistrationRequest, RegistrationModel>()
                .ForMember(m => m.PhoneNumbers,
                    opt => opt.MapFrom(r => r.RegistrationPhones.Select(x => x.PhoneNumber)));
        }
    }
}
