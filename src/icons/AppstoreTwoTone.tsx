// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone';

export interface AppstoreTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AppstoreTwoTone: AppstoreTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={AppstoreTwoToneSvg} />
    ;

AppstoreTwoTone.displayName = 'AppstoreTwoTone';

export default AppstoreTwoTone;