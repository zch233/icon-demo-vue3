// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined';

export interface SubnodeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SubnodeOutlined: SubnodeOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SubnodeOutlinedSvg} />
    ;

SubnodeOutlined.displayName = 'SubnodeOutlined';

export default SubnodeOutlined;