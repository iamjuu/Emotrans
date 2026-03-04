import { CometCard } from "../../ui/3dcard/3dcard";
import { Logistics1 } from "../../assets"
export function CometCardDemo() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-gray-50 p-2 md:my-20 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}>
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-secondary object-cover "
              alt="Invite background"
              src={Logistics1}
              style={{
                // boxShadow: "rgba(231, 50, 50, 0.871) 0px 5px 6px 0px",
                opacity: 1,
              }} />
          </div>
        </div>
        <div
          className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-black">
          <div className="text-xs">Comet Invitation</div>
          <div className="text-xs text-black opacity-50">#F7RA</div>
        </div>
      </button>
    </CometCard>
  );
}
