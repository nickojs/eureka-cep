import useAddress from '../../context/AddressContext';
import DisplayAddress from '../../components/DisplayAddress/DisplayAddress';

export default () => {
  const { data } = useAddress();

  return (
    <div>
      {data && (<DisplayAddress {...data} />)}
    </div>
  );
};
