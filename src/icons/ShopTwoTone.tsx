// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone';

export interface ShopTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ShopTwoTone: ShopTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ShopTwoToneSvg} />
    ;

ShopTwoTone.displayName = 'ShopTwoTone';

export default ShopTwoTone;