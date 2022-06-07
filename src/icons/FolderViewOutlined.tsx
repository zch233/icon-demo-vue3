// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined';

export interface FolderViewOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderViewOutlined: FolderViewOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FolderViewOutlinedSvg} />
    ;

FolderViewOutlined.displayName = 'FolderViewOutlined';

export default FolderViewOutlined;