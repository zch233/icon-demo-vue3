// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone';

export interface UnlockTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UnlockTwoTone: UnlockTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={UnlockTwoToneSvg} />
    ;

UnlockTwoTone.displayName = 'UnlockTwoTone';

export default UnlockTwoTone;