// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled';

export interface CopyrightCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CopyrightCircleFilled: CopyrightCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CopyrightCircleFilledSvg} />
    ;

CopyrightCircleFilled.displayName = 'CopyrightCircleFilled';

export default CopyrightCircleFilled;