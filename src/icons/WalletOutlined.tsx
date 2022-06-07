// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';

export interface WalletOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WalletOutlined: WalletOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={WalletOutlinedSvg} />
    ;

WalletOutlined.displayName = 'WalletOutlined';

export default WalletOutlined;