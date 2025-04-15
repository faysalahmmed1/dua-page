"use client";
import { Copy, Share2, Volume2, Bookmark } from "lucide-react";

export default function DuaDetailCard() {
  return (
    <div className="space-y-6 bg-gray-50 h-[100vh] ">
      <div className="text-sm font-medium text-gray-600 shadow py-3 mx-2">
        <p className="ml-2">
          Section:{" "}
          <span className="text-emerald-600">
            The servant is dependent on his Lord
          </span>
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl m-2 p-4 shadow-[0px_2px_2px_rgba(0,0,0,0.06)]">
        <div className="flex  items-center text-emerald-600 font-semibold text-base leading-[25px] mb-1">
          <img
            src="assets/image/allah.png"
            alt="Image description"
            className="h-[35px] w-[35px] object-contain align-middle mr-2"
          />
          <span className="text-emerald-500 mr-1">1.</span>
          <span>The servant is dependent on his Lord #1</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>

        <p className="mt-4 text-sm text-emerald-700 font-medium">
          Reference:
          <span className="block text-gray-600 font-normal">
            Surah Al-Fatir 35:15
          </span>
        </p>

        <div className="flex justify-end gap-4 mt-4 text-gray-400">
          <Volume2 className="hover:text-emerald-600 cursor-pointer" />
          <Bookmark className="hover:text-emerald-600 cursor-pointer" />
          <Copy className="hover:text-emerald-600 cursor-pointer" />
          <Share2 className="hover:text-emerald-600 cursor-pointer" />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl m-2  p-5 shadow-[0px_2px_2px_rgba(0,0,0,0.06)]">
        <div className="flex  items-center text-emerald-600 font-semibold text-base leading-[25px] mb-1">
          <span>
            <img
              src="assets/image/allah.png"
              alt="Image description"
              className=" mr-2 h-9 w-9"
            />
          </span>
          <span className="text-emerald-500">2.</span>
          <span>Conditions for Dua to be successful</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          Prophet (ﷺ) used to say after every compulsory prayer, the servant
          will ask his Lord for all of his religiously and worldly needs...
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mt-2">
          Allah says (interpretation of the meaning): “And there is not a thing
          but that with Us are its depositories, and We do not send it down
          except according to a known measure.” (Sura Al-Hijr 15:21)
        </p>

        <div className="text-center text-xl leading-loose font-[Scheherazade] mt-4 text-gray-900">
          لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...
        </div>

        <p className="text-sm italic text-gray-600 mt-4">
          Transliteration:
          <span className="not-italic block text-gray-700 mt-1">
            Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
            lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa
            maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u
            dhal-jaddi minka al-jaddu
          </span>
        </p>

        <p className="text-sm text-gray-700 mt-2">
          <strong>Translation:</strong> There is none worthy of worship except
          Allah...
        </p>

        <p className="mt-4 text-sm text-emerald-700 font-medium">
          Reference:
          <span className="block text-gray-600 font-normal">Bukhari: 844</span>
        </p>

        <div className="flex justify-between mt-2 ">
          <div>
            <img src="assets/image/Group-120.png" alt="" />
          </div>
          <div className=" flex justify-end gap-4 mt-4 text-gray-400">
            <Volume2 className="hover:text-emerald-600 cursor-pointer" />
            <Bookmark className="hover:text-emerald-600 cursor-pointer" />
            <Copy className="hover:text-emerald-600 cursor-pointer" />
            <Share2 className="hover:text-emerald-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
