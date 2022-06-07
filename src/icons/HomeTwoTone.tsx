// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone';

export interface HomeTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HomeTwoTone: HomeTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={HomeTwoToneSvg} />
    ;

HomeTwoTone.displayName = 'HomeTwoTone';

export default HomeTwoTone;