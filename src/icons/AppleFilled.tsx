// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';

export interface AppleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AppleFilled: AppleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={AppleFilledSvg} />
    ;

AppleFilled.displayName = 'AppleFilled';

export default AppleFilled;