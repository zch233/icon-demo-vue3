// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined';

export interface FolderOpenOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderOpenOutlined: FolderOpenOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FolderOpenOutlinedSvg} />
    ;

FolderOpenOutlined.displayName = 'FolderOpenOutlined';

export default FolderOpenOutlined;