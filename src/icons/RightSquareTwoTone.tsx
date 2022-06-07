// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone';

export interface RightSquareTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RightSquareTwoTone: RightSquareTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RightSquareTwoToneSvg} />
    ;

RightSquareTwoTone.displayName = 'RightSquareTwoTone';

export default RightSquareTwoTone;