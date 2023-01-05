import { Outlet, useParams, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => navigate(`/`)}>INVENTORY</li>
          <li onClick={() => navigate(`/catalog/row-manager`)}>CATALOG</li>
          <li onClick={() => navigate(`/promos/promo-badges`)}>RROMOS</li>
          <li onClick={() => navigate(`/channels`)}>CHANNELS</li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

/**
 * Root pages
 */
export const Inventory = () => <h1>Inventory</h1>;

export const Catalog = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Catalog</h1>
      <nav>
        <ul>
          <li onClick={() => navigate(`row-manager`)}>Row Manager</li>
          <li onClick={() => navigate(`default-catalog`)}>Default Catalog</li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export const Promos = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Promos</h1>
      <nav>
        <ul>
          <li onClick={() => navigate(`promo-badges`)}>Promo Badges</li>
          <li onClick={() => navigate(`live-carousel`)}>Live Carousel</li>
          <li onClick={() => navigate(`free-contents`)}>Free Contents</li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export const Channels = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Channels</h1>
      <nav>
        <ul>
          <li onClick={() => navigate(`channel/new`)}>Create New Channel</li>
          <li onClick={() => navigate(`channel/view/123`)}>View Channel</li>
          <li onClick={() => navigate(`channel/edit/123`)}>Edit Channel</li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

/**
 * Pages nested in Catalog
 */
export const RowManager = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Row Manager</h2>
      <ul>
        <li onClick={() => navigate(`new`)}>Create New Row</li>
        <li onClick={() => navigate(`row/view/123`)}>View Row</li>
        <li onClick={() => navigate(`row/edit/123`)}>Edit Row</li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export const DefaultCatalog = () => <h2>Default Catalog</h2>;

/**
 * Pages nested in Catalog / RowManager
 */
export const RowManagerEdit = () => {
  const { id } = useParams<'id'>();
  return <h3>Edit Row - {id}</h3>;
};

export const RowManagerView = () => {
  const { id } = useParams<'id'>();
  return <h3>View Row - {id}</h3>;
};

export const RowManagerAdd = () => <h3>Add Row</h3>;

/**
 * Pages nested in Promos
 */
export const PromoBadges = () => <h2>Promo Badges</h2>;

export const LiveCarousel = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Live Carousel</h2>
      <ul>
        <li onClick={() => navigate(`slide/new`)}>Create New Slide</li>
        <li onClick={() => navigate(`slide/view/123`)}>View Slide</li>
        <li onClick={() => navigate(`slide/edit/123`)}>Edit Slide</li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
export const FreeContents = () => <h2>Free Contents</h2>;

/**
 * Pages nested in Promos / LiveCarousel
 */
export const LiveCarouselEdit = () => {
  const { id } = useParams<'id'>();
  return <h3>Edit Carousel - {id}</h3>;
};

export const LiveCarouselView = () => {
  const { id } = useParams<'id'>();
  return <h3>View Carousel - {id}</h3>;
};

export const LiveCarouselAdd = () => <h3>Add Carousel</h3>;

/**
 * Pages nested in Channels
 */
export const ChannelEdit = () => {
  const { id } = useParams<'id'>();
  return <h3>Edit Channel - {id}</h3>;
};

export const ChannelView = () => {
  const { id } = useParams<'id'>();
  return (
    <div>
      <h3>View Channel - {id}</h3>
    </div>
  );
};

export const ChannelAdd = () => <h3>Add Channel</h3>;
