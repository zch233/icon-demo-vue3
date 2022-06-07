// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone';

export interface RedEnvelopeTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RedEnvelopeTwoTone: RedEnvelopeTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RedEnvelopeTwoToneSvg} />
    ;

RedEnvelopeTwoTone.displayName = 'RedEnvelopeTwoTone';

export default RedEnvelopeTwoTone;