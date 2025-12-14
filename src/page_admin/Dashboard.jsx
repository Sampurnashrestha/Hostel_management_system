  import activities from "../data/activities";
  import payments from "../data/payment";
  import students from "../data/student";
  import  rooms from "../data/room";


  const Dashboard = () => {
    const totalstudent = students.length;
    const totalroom = rooms.length;
    const avaliableroom = rooms.filter(r => r.status=== 'vacant').length;
    const unpaidpayments = payments.filter(p => p.status === 'pending').length;
  

    const dashboardCard = [
      {id : 1, title : 'Total Student' , value: totalstudent },
      {id : 2, title : 'Total Room' , value: totalroom },
      {id : 3,  title: 'Total Unpaid Amount ' , value : unpaidpayments},
      {id : 4, title : 'Total Avaliable Room' , value: avaliableroom}
    ];

      return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
          <div className="w-full px-80  ">
            <h1 className="font-extrabold text-[78px]  ml-3  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-101  cursor-default">
              Everest Hostel
            </h1>
          
            
          <div className="grid grid-cols-2 justify-centern ml-15 mt-7 gap-6 justify-center items-center cursor-default" >
            {dashboardCard.map(card =>(
              <div
              key={card.id}
              className="w-[200px] h-[150px] bg-white  rounded-2xl shadow-lg flex flex-col justify-center items-center   hover:shadow-xl transition" 
              >
                  <h1 className="font-bold text-lg">{card.title}</h1>
                  <span className="font-semibold text-gray-800 mt-1">{card.value}</span>
              </div>
            ))}
          </div>
          <div className=" mt-15 max-w-lg mx-auto cursor-default ">
            
              <h2 className="text-2xl font-semibold text-blue-600">
                Recent Activities:
              </h2>
        <ul className="space-y-3">
            {activities.map(activity =>(
              
                <li
                  key={activity.id}
                  className=" ml-4 bg-white shadow rounded-lg text-[18px] p-2 text-gray-500 flex items-center gap-2" 
                >
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {activity.message}
                </li>
            
            ))}
            </ul>
          </div>
        </div>
          </div>
      
      );
    };

    export default Dashboard;
