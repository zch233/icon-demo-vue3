// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone';

export interface PlusSquareTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PlusSquareTwoTone: PlusSquareTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={PlusSquareTwoToneSvg} />
    ;

PlusSquareTwoTone.displayName = 'PlusSquareTwoTone';

export default PlusSquareTwoTone;