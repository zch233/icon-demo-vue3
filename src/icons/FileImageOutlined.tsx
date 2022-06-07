// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileImageOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined';

export interface FileImageOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileImageOutlined: FileImageOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileImageOutlinedSvg} />
    ;

FileImageOutlined.displayName = 'FileImageOutlined';

export default FunctionalComponent;