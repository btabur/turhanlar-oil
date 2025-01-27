const Map = () => {
    return (
      <div className="flex items-center justify-center h-auto w-full border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.689701540301!2d40.50834577503307!3d38.89723830899579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4073cfc8f4f96cff%3A0xd0900f557464a550!2sBpet-turhanlar!5e0!3m2!1str!2str!4v1737997302124!5m2!1str!2str" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className=" h-[300px]  shadow-lg w-full lg:h-[500px] "
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Map;