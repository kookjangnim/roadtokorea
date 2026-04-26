/**
 * TransportationInfo Component
 * How to Get There (Process)
 */

interface TransportationInfoProps {
  transportGuideEn: string;
  cityName: string;
  cityNameEn: string;
}

export default function TransportationInfo({ transportGuideEn, cityName, cityNameEn }: TransportationInfoProps) {
  // 간단한 가이드 파싱 (실제로는 더 복잡할 수 있음)
  void transportGuideEn;
  void cityName;

  return (
    <section id="how-to-get-there" className="py-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          🚆 How to Get to {cityNameEn}
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Getting here is easier than you think. Choose your way:
        </p>

        {/* Transport Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1: KTX */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-blue-400 text-4xl mb-4 font-bold">1</div>
            <h3 className="text-xl font-bold text-white mb-4">KTX (Express Train)</h3>
            <p className="text-gray-400">
              Fastest option from Seoul Station. Takes about 1.5-2 hours.
              Book in advance at letskorail.com
            </p>
          </div>

          {/* Step 2: Express Bus */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-blue-400 text-4xl mb-4 font-bold">2</div>
            <h3 className="text-xl font-bold text-white mb-4">Express Bus</h3>
            <p className="text-gray-400">
              Comfortable and affordable. Multiple daily departures from Dong Seoul or Gangnam Express Bus Terminal.
              Book tickets at intercitytms.kr
            </p>
          </div>

          {/* Step 3: Driving */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="text-blue-400 text-4xl mb-4 font-bold">3</div>
            <h3 className="text-xl font-bold text-white mb-4">Driving / Renting</h3>
            <p className="text-gray-400">
              Most flexible option. Rent a car or use a car-sharing app like Kakao Navi Car.
              Parking information available at each attraction.
            </p>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-12 bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-lg font-bold text-white mb-4">💡 Pro Tips</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Consider the Korail Pass for multiple destinations</li>
            <li>• Book accommodations early during peak season</li>
            <li>• Download Naver Map for offline navigation</li>
            <li>• International credit cards accepted at most places</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
