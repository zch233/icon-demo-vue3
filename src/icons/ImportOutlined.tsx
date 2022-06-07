// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined';

export interface ImportOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ImportOutlined: ImportOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ImportOutlinedSvg} />
    ;

ImportOutlined.displayName = 'ImportOutlined';

export default ImportOutlined;