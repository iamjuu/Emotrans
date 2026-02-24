import PropTypes from "prop-types";
import { FollowerPointerCard } from "../../ui/card-hover";

export function FollowingPointerDemo({ content }) {
  return (
    <div className="w-full max-w-[20rem] mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent title={content.author} avatar={content.authorAvatar} />
        }>
        <div
          className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-200 hover:shadow-xl hover:border-zinc-600">
          <div
            className="relative h-56 w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-zinc-800">
            <img
              src={content.image}
              alt="thumbnail"
              className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl" />
          </div>
          <div className="p-4   flex flex-col">
            <h2 className="text-lg font-bold text-white">
              {content.title}
            </h2>
            <h2 className="text-sm font-normal text-zinc-400 leading-relaxed">
              {content.description}
            </h2>
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-zinc-500">{content.date}</span>
              <div
                className="relative z-10 block rounded-xl bg-[#41a8d1] px-6 py-2 text-xs font-bold text-white">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

FollowingPointerDemo.propTypes = {
  content: PropTypes.shape({
    slug: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    authorAvatar: PropTypes.string,
  }).isRequired,
};

const TitleComponent = ({
  title,
  avatar
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-zinc-700" />
    <p className="text-zinc-200">{title}</p>
  </div>
);

TitleComponent.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
};
