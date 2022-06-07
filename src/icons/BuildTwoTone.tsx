// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone';

export interface BuildTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BuildTwoTone: BuildTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BuildTwoToneSvg} />
    ;

BuildTwoTone.displayName = 'BuildTwoTone';

export default BuildTwoTone;