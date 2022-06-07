// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone';

export interface GoldTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GoldTwoTone: GoldTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={GoldTwoToneSvg} />
    ;

GoldTwoTone.displayName = 'GoldTwoTone';

export default GoldTwoTone;