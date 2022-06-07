// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';

export interface IssuesCloseOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const IssuesCloseOutlined: IssuesCloseOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={IssuesCloseOutlinedSvg} />
    ;

IssuesCloseOutlined.displayName = 'IssuesCloseOutlined';

export default IssuesCloseOutlined;