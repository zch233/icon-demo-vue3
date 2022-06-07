// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';

export interface IdcardTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const IdcardTwoTone: IdcardTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={IdcardTwoToneSvg} />
    ;

IdcardTwoTone.displayName = 'IdcardTwoTone';

export default IdcardTwoTone;